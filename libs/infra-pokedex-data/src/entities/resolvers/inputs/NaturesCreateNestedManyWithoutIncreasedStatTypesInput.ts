import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesCreateOrConnectWithoutIncreasedStatTypesInput } from "../inputs/NaturesCreateOrConnectWithoutIncreasedStatTypesInput";
import { NaturesCreateWithoutIncreasedStatTypesInput } from "../inputs/NaturesCreateWithoutIncreasedStatTypesInput";
import { NaturesWhereUniqueInput } from "../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.InputType("NaturesCreateNestedManyWithoutIncreasedStatTypesInput", {})
export class NaturesCreateNestedManyWithoutIncreasedStatTypesInput {
  @TypeGraphQL.Field(_type => [NaturesCreateWithoutIncreasedStatTypesInput], {
    nullable: true
  })
  create?: NaturesCreateWithoutIncreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesCreateOrConnectWithoutIncreasedStatTypesInput], {
    nullable: true
  })
  connectOrCreate?: NaturesCreateOrConnectWithoutIncreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesWhereUniqueInput], {
    nullable: true
  })
  connect?: NaturesWhereUniqueInput[] | undefined;
}
