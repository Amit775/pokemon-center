import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesCreateWithoutDecreasedStatTypesInput } from "../inputs/NaturesCreateWithoutDecreasedStatTypesInput";
import { NaturesWhereUniqueInput } from "../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.InputType("NaturesCreateOrConnectWithoutDecreasedStatTypesInput", {})
export class NaturesCreateOrConnectWithoutDecreasedStatTypesInput {
  @TypeGraphQL.Field(_type => NaturesWhereUniqueInput, {
    nullable: false
  })
  where!: NaturesWhereUniqueInput;

  @TypeGraphQL.Field(_type => NaturesCreateWithoutDecreasedStatTypesInput, {
    nullable: false
  })
  create!: NaturesCreateWithoutDecreasedStatTypesInput;
}
