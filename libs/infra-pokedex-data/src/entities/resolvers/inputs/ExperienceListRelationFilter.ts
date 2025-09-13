import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceWhereInput } from "../inputs/ExperienceWhereInput";

@TypeGraphQL.InputType("ExperienceListRelationFilter", {})
export class ExperienceListRelationFilter {
  @TypeGraphQL.Field(_type => ExperienceWhereInput, {
    nullable: true
  })
  every?: ExperienceWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExperienceWhereInput, {
    nullable: true
  })
  some?: ExperienceWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExperienceWhereInput, {
    nullable: true
  })
  none?: ExperienceWhereInput | undefined;
}
