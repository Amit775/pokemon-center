import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesCreateManyIncreasedStatInputEnvelope } from "../inputs/NaturesCreateManyIncreasedStatInputEnvelope";
import { NaturesCreateOrConnectWithoutIncreasedStatInput } from "../inputs/NaturesCreateOrConnectWithoutIncreasedStatInput";
import { NaturesCreateWithoutIncreasedStatInput } from "../inputs/NaturesCreateWithoutIncreasedStatInput";
import { NaturesWhereUniqueInput } from "../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.InputType("NaturesCreateNestedManyWithoutIncreasedStatInput", {})
export class NaturesCreateNestedManyWithoutIncreasedStatInput {
  @TypeGraphQL.Field(_type => [NaturesCreateWithoutIncreasedStatInput], {
    nullable: true
  })
  create?: NaturesCreateWithoutIncreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesCreateOrConnectWithoutIncreasedStatInput], {
    nullable: true
  })
  connectOrCreate?: NaturesCreateOrConnectWithoutIncreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => NaturesCreateManyIncreasedStatInputEnvelope, {
    nullable: true
  })
  createMany?: NaturesCreateManyIncreasedStatInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NaturesWhereUniqueInput], {
    nullable: true
  })
  connect?: NaturesWhereUniqueInput[] | undefined;
}
