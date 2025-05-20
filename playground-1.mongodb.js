use("glowguard");

// 1. experts
db.createCollection("experts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name"],
      properties: {
        name: { bsonType: "string" },
        specialization: { bsonType: "string" },
        rating: { bsonType: "double", minimum: 0, maximum: 5 },
        experience_years: { bsonType: "int", minimum: 0 },
        patients_treated: { bsonType: "int", minimum: 0 },
        active_time: { bsonType: "string" },
        location: { bsonType: "string" },
        profile_image: { bsonType: "string" },
        social_links: { bsonType: "object" },
        created_at: { bsonType: "date" }
      }
    }
  }
});

// 2. expert_reviews
db.createCollection("expert_reviews", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["expert_id", "rating"],
      properties: {
        expert_id: { bsonType: "objectId" },
        user_id: { bsonType: ["objectId", "null"] },
        rating: { bsonType: "int", minimum: 1, maximum: 5 },
        review: { bsonType: "string" },
        created_at: { bsonType: "date" }
      }
    }
  }
});

// 3. expert_availability
db.createCollection("expert_availability", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["expert_id", "available_from", "available_to", "days_available"],
      properties: {
        expert_id: { bsonType: "objectId" },
        available_from: { bsonType: "string" },
        available_to: { bsonType: "string" },
        days_available: { bsonType: "array", items: { bsonType: "string" } },
        created_at: { bsonType: "date" },
        updated_at: { bsonType: "date" }
      }
    }
  }
});

// 4. expert_chats
db.createCollection("expert_chats", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["expert_id", "user_id", "sender_role", "message"],
      properties: {
        expert_id: { bsonType: "objectId" },
        user_id: { bsonType: "objectId" },
        sender_role: { enum: ["user", "expert"] },
        message: { bsonType: "string" },
        timestamp: { bsonType: "date" }
      }
    }
  }
});

// 5. ai_skin_analysis
db.createCollection("ai_skin_analysis", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["user_id", "image_url"],
      properties: {
        user_id: { bsonType: "objectId" },
        image_url: { bsonType: "string" },
        ai_generated_score: { bsonType: "int", minimum: 0, maximum: 100 },
        diagnosis: { bsonType: "string" },
        recommendations: { bsonType: "string" },
        created_at: { bsonType: "date" }
      }
    }
  }
});

// 6. routines
db.createCollection("routines", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["user_id", "routine_type", "steps"],
      properties: {
        user_id: { bsonType: "objectId" },
        routine_type: { enum: ["Morning", "Evening"] },
        skin_sensitivity: { enum: ["Very Sensitive", "Somewhat Sensitive", "Not Sensitive"] },
        budget: { enum: ["Budget-Friendly", "Moderate", "Premium"] },
        environment: { enum: ["Outdoors", "Indoors", "Both"] },
        frequency: { enum: ["Everyday", "Often", "Occasionally", "Rarely"] },
        brand_preference: { enum: ["Korean", "Western", "Indian", "No Preference"] },
        steps: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["step", "name"],
            properties: {
              step: { bsonType: "int" },
              name: { bsonType: "string" }
            }
          }
        },
        created_at: { bsonType: "date" }
      }
    }
  }
});

// 7. ai_chat_history
db.createCollection("ai_chat_history", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["user_id", "query", "response"],
      properties: {
        user_id: { bsonType: "objectId" },
        query: { bsonType: "string" },
        response: { bsonType: "string" },
        timestamp: { bsonType: "date" }
      }
    }
  }
});
//8.contactus 
db.createCollection("contact_us", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["first_name", "last_name", "email", "message"],
      properties: {
        first_name: { bsonType: "string" },
        last_name: { bsonType: "string" },
        email: { bsonType: "string" },
        message: { bsonType: "string" },
        created_at: { bsonType: "date" }
      }
    }
  }
});

// 1. articles
db.createCollection("articles", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title"],
      properties: {
        title: { bsonType: "string" },
        description: { bsonType: "string" },
        content: { bsonType: "string" },
        image_url: { bsonType: "string" },
        created_at: { bsonType: "date" }
      }
    }
  }
});

// 2. article_categories
db.createCollection("article_categories", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name"],
      properties: {
        name: { bsonType: "string" }
      }
    }
  }
});

// 3. article_category_map
db.createCollection("article_category_map", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["article_id", "category_id"],
      properties: {
        article_id: { bsonType: "objectId" },
        category_id: { bsonType: "objectId" }
      }
    }
  }
});

// 4. article_filters
db.createCollection("article_filters", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name"],
      properties: {
        name: {
          enum: ["most_popular", "latest", "recommended"]
        }
      }
    }
  }
});

// 5. article_sort_map
db.createCollection("article_sort_map", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["article_id", "filter_id"],
      properties: {
        article_id: { bsonType: "objectId" },
        filter_id: { bsonType: "objectId" }
      }
    }
  }
});

// 6. user_social_links
db.createCollection("user_social_links", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["user_id", "platform"],
      properties: {
        user_id: { bsonType: "objectId" },
        platform: { bsonType: "string" },
        profile_url: { bsonType: "string" },
        linked_at: { bsonType: "date" }
      }
    }
  }
});

// 7. user_security
db.createCollection("user_security", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["user_id"],
      properties: {
        user_id: { bsonType: "objectId" },
        password_reset_token: { bsonType: "string" },
        reset_token_expires: { bsonType: "date" },
        mfa_enabled: { bsonType: "bool" },
        mfa_secret: { bsonType: "string" },
        last_password_change: { bsonType: "date" }
      }
    }
  }
});

// 8. user_email_preferences
db.createCollection("user_email_preferences", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["user_id"],
      properties: {
        user_id: { bsonType: "objectId" },
        skin_sort_emails: { bsonType: "bool" },
        submission_approval_emails: { bsonType: "bool" },
        notification_emails: { bsonType: "bool" }
      }
    }
  }
});

// 9. favorites
db.createCollection("favorites", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["user_id"],
      properties: {
        user_id: { bsonType: "objectId" },
        item_type: { bsonType: "string" },
        item_id: { bsonType: "objectId" },
        saved_at: { bsonType: "date" }
      }
    }
  }
});

// 10. support_requests
db.createCollection("support_requests", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["user_id", "subject", "message", "status"],
      properties: {
        user_id: { bsonType: "objectId" },
        subject: { bsonType: "string" },
        message: { bsonType: "string" },
        status: {
          enum: ["pending", "resolved", "closed"]
        },
        created_at: { bsonType: "date" }
      }
    }
  }
});

// 11. contact_messages
db.createCollection("contact_messages", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        first_name: { bsonType: "string" },
        last_name: { bsonType: "string" },
        email: { bsonType: "string" },
        message: { bsonType: "string" },
        sent_at: { bsonType: "date" }
      }
    }
  }
});

// 12. user_profile
db.createCollection("user_profile", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["user_id"],
      properties: {
        user_id: { bsonType: "objectId" },
        screen_name: { bsonType: "string" },
        avatar_url: { bsonType: "string" },
        bio: { bsonType: "string" },
        date_of_birth: { bsonType: "date" },
        gender: { bsonType: "string" },
        location: { bsonType: "string" },
        created_at: { bsonType: "date" }
      }
    }
  }
});
