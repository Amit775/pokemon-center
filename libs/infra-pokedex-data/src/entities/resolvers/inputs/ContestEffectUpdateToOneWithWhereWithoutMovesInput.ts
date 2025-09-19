import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestEffectUpdateWithoutMovesInput } from "../inputs/ContestEffectUpdateWithoutMovesInput";
import { ContestEffectWhereInput } from "../inputs/ContestEffectWhereInput";

@TypeGraphQL.InputType("ContestEffectUpdateToOneWithWhereWithoutMovesInput", {})
export class ContestEffectUpdateToOneWithWhereWithoutMovesInput {
  @TypeGraphQL.Field(_type => ContestEffectWhereInput, {
    nullable: true
  })
  where?: ContestEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectUpdateWithoutMovesInput, {
    nullable: false
  })
  data!: ContestEffectUpdateWithoutMovesInput;
}
