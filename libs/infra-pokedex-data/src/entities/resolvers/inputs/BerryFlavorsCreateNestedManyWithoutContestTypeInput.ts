import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsCreateManyContestTypeInputEnvelope } from "../inputs/BerryFlavorsCreateManyContestTypeInputEnvelope";
import { BerryFlavorsCreateOrConnectWithoutContestTypeInput } from "../inputs/BerryFlavorsCreateOrConnectWithoutContestTypeInput";
import { BerryFlavorsCreateWithoutContestTypeInput } from "../inputs/BerryFlavorsCreateWithoutContestTypeInput";
import { BerryFlavorsWhereUniqueInput } from "../inputs/BerryFlavorsWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorsCreateNestedManyWithoutContestTypeInput", {})
export class BerryFlavorsCreateNestedManyWithoutContestTypeInput {
  @TypeGraphQL.Field(_type => [BerryFlavorsCreateWithoutContestTypeInput], {
    nullable: true
  })
  create?: BerryFlavorsCreateWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsCreateOrConnectWithoutContestTypeInput], {
    nullable: true
  })
  connectOrCreate?: BerryFlavorsCreateOrConnectWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsCreateManyContestTypeInputEnvelope, {
    nullable: true
  })
  createMany?: BerryFlavorsCreateManyContestTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsWhereUniqueInput], {
    nullable: true
  })
  connect?: BerryFlavorsWhereUniqueInput[] | undefined;
}
