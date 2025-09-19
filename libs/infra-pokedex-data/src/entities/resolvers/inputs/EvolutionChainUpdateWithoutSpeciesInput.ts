import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemUpdateOneWithoutBabyTriggerItemsNestedInput } from "../inputs/ItemUpdateOneWithoutBabyTriggerItemsNestedInput";

@TypeGraphQL.InputType("EvolutionChainUpdateWithoutSpeciesInput", {})
export class EvolutionChainUpdateWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => ItemUpdateOneWithoutBabyTriggerItemsNestedInput, {
    nullable: true
  })
  babyTriggerItem?: ItemUpdateOneWithoutBabyTriggerItemsNestedInput | undefined;
}
