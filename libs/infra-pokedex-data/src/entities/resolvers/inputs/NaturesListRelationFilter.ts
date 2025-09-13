import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesWhereInput } from "../inputs/NaturesWhereInput";

@TypeGraphQL.InputType("NaturesListRelationFilter", {})
export class NaturesListRelationFilter {
  @TypeGraphQL.Field(_type => NaturesWhereInput, {
    nullable: true
  })
  every?: NaturesWhereInput | undefined;

  @TypeGraphQL.Field(_type => NaturesWhereInput, {
    nullable: true
  })
  some?: NaturesWhereInput | undefined;

  @TypeGraphQL.Field(_type => NaturesWhereInput, {
    nullable: true
  })
  none?: NaturesWhereInput | undefined;
}
