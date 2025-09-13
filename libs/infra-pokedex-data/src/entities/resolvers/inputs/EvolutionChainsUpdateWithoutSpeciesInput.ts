import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsUpdateOneWithoutBabyTriggerItemsNestedInput } from "../inputs/ItemsUpdateOneWithoutBabyTriggerItemsNestedInput";

@TypeGraphQL.InputType("EvolutionChainsUpdateWithoutSpeciesInput", {})
export class EvolutionChainsUpdateWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateOneWithoutBabyTriggerItemsNestedInput, {
    nullable: true
  })
  babyTriggerItem?: ItemsUpdateOneWithoutBabyTriggerItemsNestedInput | undefined;
}
