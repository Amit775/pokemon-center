import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryUpdateOneRequiredWithoutFlavorsNestedInput } from "../inputs/BerryUpdateOneRequiredWithoutFlavorsNestedInput";
import { TypeUpdateOneRequiredWithoutBerryFlavorsNestedInput } from "../inputs/TypeUpdateOneRequiredWithoutBerryFlavorsNestedInput";

@TypeGraphQL.InputType("BerryFlavorUpdateWithoutContestTypeInput", {})
export class BerryFlavorUpdateWithoutContestTypeInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  flavor?: number | undefined;

  @TypeGraphQL.Field(_type => BerryUpdateOneRequiredWithoutFlavorsNestedInput, {
    nullable: true
  })
  berry?: BerryUpdateOneRequiredWithoutFlavorsNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateOneRequiredWithoutBerryFlavorsNestedInput, {
    nullable: true
  })
  type?: TypeUpdateOneRequiredWithoutBerryFlavorsNestedInput | undefined;
}
