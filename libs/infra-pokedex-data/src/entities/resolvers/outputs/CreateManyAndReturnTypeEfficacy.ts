import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Type } from "../../models/Type";

@TypeGraphQL.ObjectType("CreateManyAndReturnTypeEfficacy", {})
export class CreateManyAndReturnTypeEfficacy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  damage_type_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  target_type_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  damage_factor!: number;

  @TypeGraphQL.Field(_type => Type, {
    nullable: false
  })
  damageType!: Type;

  @TypeGraphQL.Field(_type => Type, {
    nullable: false
  })
  targetType!: Type;
}
