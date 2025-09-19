import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicWhereInput } from "../inputs/CharacteristicWhereInput";
import { IntFilter } from "../inputs/IntFilter";
import { StatRelationFilter } from "../inputs/StatRelationFilter";

@TypeGraphQL.InputType("CharacteristicWhereUniqueInput", {})
export class CharacteristicWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicWhereInput], {
    nullable: true
  })
  AND?: CharacteristicWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicWhereInput], {
    nullable: true
  })
  OR?: CharacteristicWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicWhereInput], {
    nullable: true
  })
  NOT?: CharacteristicWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  stat_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  gene_mod_5?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StatRelationFilter, {
    nullable: true
  })
  stat?: StatRelationFilter | undefined;
}
