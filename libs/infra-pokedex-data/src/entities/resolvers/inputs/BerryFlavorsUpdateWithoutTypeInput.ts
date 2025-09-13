import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesUpdateOneRequiredWithoutFlavorsNestedInput } from "../inputs/BerriesUpdateOneRequiredWithoutFlavorsNestedInput";
import { ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput } from "../inputs/ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput";

@TypeGraphQL.InputType("BerryFlavorsUpdateWithoutTypeInput", {})
export class BerryFlavorsUpdateWithoutTypeInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  flavor?: number | undefined;

  @TypeGraphQL.Field(_type => BerriesUpdateOneRequiredWithoutFlavorsNestedInput, {
    nullable: true
  })
  berry?: BerriesUpdateOneRequiredWithoutFlavorsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput, {
    nullable: true
  })
  contestType?: ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput | undefined;
}
