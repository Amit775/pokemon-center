import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesCreateOrConnectWithoutDecreasedStatTypesInput } from "../inputs/NaturesCreateOrConnectWithoutDecreasedStatTypesInput";
import { NaturesCreateWithoutDecreasedStatTypesInput } from "../inputs/NaturesCreateWithoutDecreasedStatTypesInput";
import { NaturesWhereUniqueInput } from "../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.InputType("NaturesCreateNestedManyWithoutDecreasedStatTypesInput", {})
export class NaturesCreateNestedManyWithoutDecreasedStatTypesInput {
  @TypeGraphQL.Field(_type => [NaturesCreateWithoutDecreasedStatTypesInput], {
    nullable: true
  })
  create?: NaturesCreateWithoutDecreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesCreateOrConnectWithoutDecreasedStatTypesInput], {
    nullable: true
  })
  connectOrCreate?: NaturesCreateOrConnectWithoutDecreasedStatTypesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesWhereUniqueInput], {
    nullable: true
  })
  connect?: NaturesWhereUniqueInput[] | undefined;
}
