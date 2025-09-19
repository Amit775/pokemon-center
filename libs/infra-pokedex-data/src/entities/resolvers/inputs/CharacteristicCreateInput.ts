import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatCreateNestedOneWithoutCharacteristicsInput } from "../inputs/StatCreateNestedOneWithoutCharacteristicsInput";

@TypeGraphQL.InputType("CharacteristicCreateInput", {})
export class CharacteristicCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  gene_mod_5!: number;

  @TypeGraphQL.Field(_type => StatCreateNestedOneWithoutCharacteristicsInput, {
    nullable: false
  })
  stat!: StatCreateNestedOneWithoutCharacteristicsInput;
}
