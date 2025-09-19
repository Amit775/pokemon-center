import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorCreateManyContestTypeInputEnvelope } from "../inputs/BerryFlavorCreateManyContestTypeInputEnvelope";
import { BerryFlavorCreateOrConnectWithoutContestTypeInput } from "../inputs/BerryFlavorCreateOrConnectWithoutContestTypeInput";
import { BerryFlavorCreateWithoutContestTypeInput } from "../inputs/BerryFlavorCreateWithoutContestTypeInput";
import { BerryFlavorWhereUniqueInput } from "../inputs/BerryFlavorWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorCreateNestedManyWithoutContestTypeInput", {})
export class BerryFlavorCreateNestedManyWithoutContestTypeInput {
  @TypeGraphQL.Field(_type => [BerryFlavorCreateWithoutContestTypeInput], {
    nullable: true
  })
  create?: BerryFlavorCreateWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorCreateOrConnectWithoutContestTypeInput], {
    nullable: true
  })
  connectOrCreate?: BerryFlavorCreateOrConnectWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorCreateManyContestTypeInputEnvelope, {
    nullable: true
  })
  createMany?: BerryFlavorCreateManyContestTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorWhereUniqueInput], {
    nullable: true
  })
  connect?: BerryFlavorWhereUniqueInput[] | undefined;
}
