import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatCreateWithoutNaturesInput } from "../inputs/StatCreateWithoutNaturesInput";
import { StatUpdateWithoutNaturesInput } from "../inputs/StatUpdateWithoutNaturesInput";
import { StatWhereInput } from "../inputs/StatWhereInput";

@TypeGraphQL.InputType("StatUpsertWithoutNaturesInput", {})
export class StatUpsertWithoutNaturesInput {
  @TypeGraphQL.Field(_type => StatUpdateWithoutNaturesInput, {
    nullable: false
  })
  update!: StatUpdateWithoutNaturesInput;

  @TypeGraphQL.Field(_type => StatCreateWithoutNaturesInput, {
    nullable: false
  })
  create!: StatCreateWithoutNaturesInput;

  @TypeGraphQL.Field(_type => StatWhereInput, {
    nullable: true
  })
  where?: StatWhereInput | undefined;
}
