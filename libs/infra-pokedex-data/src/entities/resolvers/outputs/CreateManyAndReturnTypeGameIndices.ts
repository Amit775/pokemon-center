import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Generations } from "../../models/Generations";
import { Types } from "../../models/Types";

@TypeGraphQL.ObjectType("CreateManyAndReturnTypeGameIndices", {})
export class CreateManyAndReturnTypeGameIndices {
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

  @TypeGraphQL.Field(_type => Types, {
    nullable: false
  })
  type!: Types;

  @TypeGraphQL.Field(_type => Generations, {
    nullable: false
  })
  generation!: Generations;
}
