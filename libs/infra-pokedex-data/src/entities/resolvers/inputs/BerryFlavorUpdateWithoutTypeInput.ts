import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryUpdateOneRequiredWithoutFlavorsNestedInput } from "../inputs/BerryUpdateOneRequiredWithoutFlavorsNestedInput";
import { ContestTypeUpdateOneRequiredWithoutBerryFlavorsNestedInput } from "../inputs/ContestTypeUpdateOneRequiredWithoutBerryFlavorsNestedInput";

@TypeGraphQL.InputType("BerryFlavorUpdateWithoutTypeInput", {})
export class BerryFlavorUpdateWithoutTypeInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  flavor?: number | undefined;

  @TypeGraphQL.Field(_type => BerryUpdateOneRequiredWithoutFlavorsNestedInput, {
    nullable: true
  })
  berry?: BerryUpdateOneRequiredWithoutFlavorsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeUpdateOneRequiredWithoutBerryFlavorsNestedInput, {
    nullable: true
  })
  contestType?: ContestTypeUpdateOneRequiredWithoutBerryFlavorsNestedInput | undefined;
}
