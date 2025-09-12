import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AbilitiesScalarWhereInput", {})
export class AbilitiesScalarWhereInput {
  @TypeGraphQL.Field(_type => [AbilitiesScalarWhereInput], {
    nullable: true
  })
  AND?: AbilitiesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilitiesScalarWhereInput], {
    nullable: true
  })
  OR?: AbilitiesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AbilitiesScalarWhereInput], {
    nullable: true
  })
  NOT?: AbilitiesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  generation_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  is_main_series?: IntFilter | undefined;
}
