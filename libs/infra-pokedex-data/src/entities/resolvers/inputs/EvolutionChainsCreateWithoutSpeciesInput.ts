import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateNestedOneWithoutBabyTriggerItemsInput } from "../inputs/ItemsCreateNestedOneWithoutBabyTriggerItemsInput";

@TypeGraphQL.InputType("EvolutionChainsCreateWithoutSpeciesInput", {})
export class EvolutionChainsCreateWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => ItemsCreateNestedOneWithoutBabyTriggerItemsInput, {
    nullable: true
  })
  babyTriggerItem?: ItemsCreateNestedOneWithoutBabyTriggerItemsInput | undefined;
}
