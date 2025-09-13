import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesUpdateOneRequiredWithoutFlavorsNestedInput } from "../inputs/BerriesUpdateOneRequiredWithoutFlavorsNestedInput";
import { TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput } from "../inputs/TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput";

@TypeGraphQL.InputType("BerryFlavorsUpdateWithoutContestTypeInput", {})
export class BerryFlavorsUpdateWithoutContestTypeInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  flavor?: number | undefined;

  @TypeGraphQL.Field(_type => BerriesUpdateOneRequiredWithoutFlavorsNestedInput, {
    nullable: true
  })
  berry?: BerriesUpdateOneRequiredWithoutFlavorsNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput, {
    nullable: true
  })
  type?: TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput | undefined;
}
