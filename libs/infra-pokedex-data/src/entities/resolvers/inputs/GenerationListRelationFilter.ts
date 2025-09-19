import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationWhereInput } from "../inputs/GenerationWhereInput";

@TypeGraphQL.InputType("GenerationListRelationFilter", {})
export class GenerationListRelationFilter {
  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  every?: GenerationWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  some?: GenerationWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  none?: GenerationWhereInput | undefined;
}
