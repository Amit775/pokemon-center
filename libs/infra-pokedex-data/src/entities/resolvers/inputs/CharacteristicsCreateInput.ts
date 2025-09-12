import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsCreateNestedOneWithoutCharacteristicsInput } from "../inputs/StatsCreateNestedOneWithoutCharacteristicsInput";

@TypeGraphQL.InputType("CharacteristicsCreateInput", {})
export class CharacteristicsCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  gene_mod_5!: number;

  @TypeGraphQL.Field(_type => StatsCreateNestedOneWithoutCharacteristicsInput, {
    nullable: false
  })
  stat!: StatsCreateNestedOneWithoutCharacteristicsInput;
}
