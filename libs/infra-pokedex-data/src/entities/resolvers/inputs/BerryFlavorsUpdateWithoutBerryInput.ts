import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput } from "../inputs/ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput } from "../inputs/TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput";

@TypeGraphQL.InputType("BerryFlavorsUpdateWithoutBerryInput", {})
export class BerryFlavorsUpdateWithoutBerryInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  flavor?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput, {
    nullable: true
  })
  contestType?: ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput, {
    nullable: true
  })
  type?: TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput | undefined;
}
