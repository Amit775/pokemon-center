import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsUpdateOneRequiredWithoutCharacteristicsNestedInput } from "../inputs/StatsUpdateOneRequiredWithoutCharacteristicsNestedInput";

@TypeGraphQL.InputType("CharacteristicsUpdateInput", {})
export class CharacteristicsUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gene_mod_5?: number | undefined;

  @TypeGraphQL.Field(_type => StatsUpdateOneRequiredWithoutCharacteristicsNestedInput, {
    nullable: true
  })
  stat?: StatsUpdateOneRequiredWithoutCharacteristicsNestedInput | undefined;
}
