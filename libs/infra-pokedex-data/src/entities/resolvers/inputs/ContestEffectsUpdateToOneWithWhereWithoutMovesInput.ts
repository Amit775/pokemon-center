import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestEffectsUpdateWithoutMovesInput } from "../inputs/ContestEffectsUpdateWithoutMovesInput";
import { ContestEffectsWhereInput } from "../inputs/ContestEffectsWhereInput";

@TypeGraphQL.InputType("ContestEffectsUpdateToOneWithWhereWithoutMovesInput", {})
export class ContestEffectsUpdateToOneWithWhereWithoutMovesInput {
  @TypeGraphQL.Field(_type => ContestEffectsWhereInput, {
    nullable: true
  })
  where?: ContestEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectsUpdateWithoutMovesInput, {
    nullable: false
  })
  data!: ContestEffectsUpdateWithoutMovesInput;
}
