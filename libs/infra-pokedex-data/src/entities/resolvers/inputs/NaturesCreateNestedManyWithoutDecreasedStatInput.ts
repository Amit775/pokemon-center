import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesCreateManyDecreasedStatInputEnvelope } from "../inputs/NaturesCreateManyDecreasedStatInputEnvelope";
import { NaturesCreateOrConnectWithoutDecreasedStatInput } from "../inputs/NaturesCreateOrConnectWithoutDecreasedStatInput";
import { NaturesCreateWithoutDecreasedStatInput } from "../inputs/NaturesCreateWithoutDecreasedStatInput";
import { NaturesWhereUniqueInput } from "../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.InputType("NaturesCreateNestedManyWithoutDecreasedStatInput", {})
export class NaturesCreateNestedManyWithoutDecreasedStatInput {
  @TypeGraphQL.Field(_type => [NaturesCreateWithoutDecreasedStatInput], {
    nullable: true
  })
  create?: NaturesCreateWithoutDecreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesCreateOrConnectWithoutDecreasedStatInput], {
    nullable: true
  })
  connectOrCreate?: NaturesCreateOrConnectWithoutDecreasedStatInput[] | undefined;

  @TypeGraphQL.Field(_type => NaturesCreateManyDecreasedStatInputEnvelope, {
    nullable: true
  })
  createMany?: NaturesCreateManyDecreasedStatInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NaturesWhereUniqueInput], {
    nullable: true
  })
  connect?: NaturesWhereUniqueInput[] | undefined;
}
