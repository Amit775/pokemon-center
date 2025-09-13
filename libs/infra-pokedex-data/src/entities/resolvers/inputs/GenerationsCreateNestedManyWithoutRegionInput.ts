import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateManyRegionInputEnvelope } from "../inputs/GenerationsCreateManyRegionInputEnvelope";
import { GenerationsCreateOrConnectWithoutRegionInput } from "../inputs/GenerationsCreateOrConnectWithoutRegionInput";
import { GenerationsCreateWithoutRegionInput } from "../inputs/GenerationsCreateWithoutRegionInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsCreateNestedManyWithoutRegionInput", {})
export class GenerationsCreateNestedManyWithoutRegionInput {
  @TypeGraphQL.Field(_type => [GenerationsCreateWithoutRegionInput], {
    nullable: true
  })
  create?: GenerationsCreateWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationsCreateOrConnectWithoutRegionInput], {
    nullable: true
  })
  connectOrCreate?: GenerationsCreateOrConnectWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => GenerationsCreateManyRegionInputEnvelope, {
    nullable: true
  })
  createMany?: GenerationsCreateManyRegionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GenerationsWhereUniqueInput], {
    nullable: true
  })
  connect?: GenerationsWhereUniqueInput[] | undefined;
}
