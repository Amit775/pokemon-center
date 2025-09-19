import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationWhereInput } from "../inputs/GenerationWhereInput";

@TypeGraphQL.InputType("GenerationRelationFilter", {})
export class GenerationRelationFilter {
  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  is?: GenerationWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  isNot?: GenerationWhereInput | undefined;
}
