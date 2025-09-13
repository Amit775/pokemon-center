import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesCreateWithoutIncreasedStatTypesInput } from "../inputs/NaturesCreateWithoutIncreasedStatTypesInput";
import { NaturesWhereUniqueInput } from "../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.InputType("NaturesCreateOrConnectWithoutIncreasedStatTypesInput", {})
export class NaturesCreateOrConnectWithoutIncreasedStatTypesInput {
  @TypeGraphQL.Field(_type => NaturesWhereUniqueInput, {
    nullable: false
  })
  where!: NaturesWhereUniqueInput;

  @TypeGraphQL.Field(_type => NaturesCreateWithoutIncreasedStatTypesInput, {
    nullable: false
  })
  create!: NaturesCreateWithoutIncreasedStatTypesInput;
}
