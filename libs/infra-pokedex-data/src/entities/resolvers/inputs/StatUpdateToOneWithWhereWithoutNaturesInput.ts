import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatUpdateWithoutNaturesInput } from "../inputs/StatUpdateWithoutNaturesInput";
import { StatWhereInput } from "../inputs/StatWhereInput";

@TypeGraphQL.InputType("StatUpdateToOneWithWhereWithoutNaturesInput", {})
export class StatUpdateToOneWithWhereWithoutNaturesInput {
  @TypeGraphQL.Field(_type => StatWhereInput, {
    nullable: true
  })
  where?: StatWhereInput | undefined;

  @TypeGraphQL.Field(_type => StatUpdateWithoutNaturesInput, {
    nullable: false
  })
  data!: StatUpdateWithoutNaturesInput;
}
