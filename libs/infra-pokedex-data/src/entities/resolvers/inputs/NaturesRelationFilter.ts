import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesWhereInput } from "../inputs/NaturesWhereInput";

@TypeGraphQL.InputType("NaturesRelationFilter", {})
export class NaturesRelationFilter {
  @TypeGraphQL.Field(_type => NaturesWhereInput, {
    nullable: true
  })
  is?: NaturesWhereInput | undefined;

  @TypeGraphQL.Field(_type => NaturesWhereInput, {
    nullable: true
  })
  isNot?: NaturesWhereInput | undefined;
}
