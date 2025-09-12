import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesUpdateOneRequiredWithoutFlavorsNestedInput } from "../inputs/BerriesUpdateOneRequiredWithoutFlavorsNestedInput";
import { ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput } from "../inputs/ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput } from "../inputs/TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput";

@TypeGraphQL.InputType("BerryFlavorsUpdateInput", {})
export class BerryFlavorsUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  flavor?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BerriesUpdateOneRequiredWithoutFlavorsNestedInput, {
    nullable: true
  })
  berry?: BerriesUpdateOneRequiredWithoutFlavorsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput, {
    nullable: true
  })
  contestType?: ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput, {
    nullable: true
  })
  type?: TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput | undefined;
}
