import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GenerationScalarWhereInput", {})
export class GenerationScalarWhereInput {
  @TypeGraphQL.Field(_type => [GenerationScalarWhereInput], {
    nullable: true
  })
  AND?: GenerationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationScalarWhereInput], {
    nullable: true
  })
  OR?: GenerationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationScalarWhereInput], {
    nullable: true
  })
  NOT?: GenerationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  main_region_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;
}
