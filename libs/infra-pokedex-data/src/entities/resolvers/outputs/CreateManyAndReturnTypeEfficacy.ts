import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Types } from "../../models/Types";

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

  @TypeGraphQL.Field(_type => Types, {
    nullable: false
  })
  damageType!: Types;

  @TypeGraphQL.Field(_type => Types, {
    nullable: false
  })
  targetType!: Types;
}
