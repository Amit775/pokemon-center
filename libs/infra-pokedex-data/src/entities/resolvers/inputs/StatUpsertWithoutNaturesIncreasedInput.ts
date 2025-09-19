import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatCreateWithoutNaturesIncreasedInput } from "../inputs/StatCreateWithoutNaturesIncreasedInput";
import { StatUpdateWithoutNaturesIncreasedInput } from "../inputs/StatUpdateWithoutNaturesIncreasedInput";
import { StatWhereInput } from "../inputs/StatWhereInput";

@TypeGraphQL.InputType("StatUpsertWithoutNaturesIncreasedInput", {})
export class StatUpsertWithoutNaturesIncreasedInput {
  @TypeGraphQL.Field(_type => StatUpdateWithoutNaturesIncreasedInput, {
    nullable: false
  })
  update!: StatUpdateWithoutNaturesIncreasedInput;

  @TypeGraphQL.Field(_type => StatCreateWithoutNaturesIncreasedInput, {
    nullable: false
  })
  create!: StatCreateWithoutNaturesIncreasedInput;

  @TypeGraphQL.Field(_type => StatWhereInput, {
    nullable: true
  })
  where?: StatWhereInput | undefined;
}
