import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypeUpdateOneRequiredWithoutBerryFlavorsNestedInput } from "../inputs/ContestTypeUpdateOneRequiredWithoutBerryFlavorsNestedInput";
import { TypeUpdateOneRequiredWithoutBerryFlavorsNestedInput } from "../inputs/TypeUpdateOneRequiredWithoutBerryFlavorsNestedInput";

@TypeGraphQL.InputType("BerryFlavorUpdateWithoutBerryInput", {})
export class BerryFlavorUpdateWithoutBerryInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  flavor?: number | undefined;

  @TypeGraphQL.Field(_type => ContestTypeUpdateOneRequiredWithoutBerryFlavorsNestedInput, {
    nullable: true
  })
  contestType?: ContestTypeUpdateOneRequiredWithoutBerryFlavorsNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateOneRequiredWithoutBerryFlavorsNestedInput, {
    nullable: true
  })
  type?: TypeUpdateOneRequiredWithoutBerryFlavorsNestedInput | undefined;
}
