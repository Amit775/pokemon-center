import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatUpdateOneRequiredWithoutCharacteristicsNestedInput } from "../inputs/StatUpdateOneRequiredWithoutCharacteristicsNestedInput";

@TypeGraphQL.InputType("CharacteristicUpdateInput", {})
export class CharacteristicUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gene_mod_5?: number | undefined;

  @TypeGraphQL.Field(_type => StatUpdateOneRequiredWithoutCharacteristicsNestedInput, {
    nullable: true
  })
  stat?: StatUpdateOneRequiredWithoutCharacteristicsNestedInput | undefined;
}
