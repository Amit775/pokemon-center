import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutKnownMovesInput } from "../inputs/MovesCreateWithoutKnownMovesInput";
import { MovesUpdateWithoutKnownMovesInput } from "../inputs/MovesUpdateWithoutKnownMovesInput";
import { MovesWhereInput } from "../inputs/MovesWhereInput";

@TypeGraphQL.InputType("MovesUpsertWithoutKnownMovesInput", {})
export class MovesUpsertWithoutKnownMovesInput {
  @TypeGraphQL.Field(_type => MovesUpdateWithoutKnownMovesInput, {
    nullable: false
  })
  update!: MovesUpdateWithoutKnownMovesInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutKnownMovesInput, {
    nullable: false
  })
  create!: MovesCreateWithoutKnownMovesInput;

  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;
}
