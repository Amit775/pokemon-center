import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachinesWhereInput } from "../inputs/MachinesWhereInput";

@TypeGraphQL.InputType("MachinesListRelationFilter", {})
export class MachinesListRelationFilter {
  @TypeGraphQL.Field(_type => MachinesWhereInput, {
    nullable: true
  })
  every?: MachinesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MachinesWhereInput, {
    nullable: true
  })
  some?: MachinesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MachinesWhereInput, {
    nullable: true
  })
  none?: MachinesWhereInput | undefined;
}
