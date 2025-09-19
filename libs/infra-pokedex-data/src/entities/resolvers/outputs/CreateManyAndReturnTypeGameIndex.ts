import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Generation } from "../../models/Generation";
import { Type } from "../../models/Type";

@TypeGraphQL.ObjectType("CreateManyAndReturnTypeGameIndex", {})
export class CreateManyAndReturnTypeGameIndex {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  type_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  generation_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => Type, {
    nullable: false
  })
  type!: Type;

  @TypeGraphQL.Field(_type => Generation, {
    nullable: false
  })
  generation!: Generation;
}
