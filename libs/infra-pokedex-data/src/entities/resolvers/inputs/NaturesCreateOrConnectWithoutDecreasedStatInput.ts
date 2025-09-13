import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesCreateWithoutDecreasedStatInput } from "../inputs/NaturesCreateWithoutDecreasedStatInput";
import { NaturesWhereUniqueInput } from "../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.InputType("NaturesCreateOrConnectWithoutDecreasedStatInput", {})
export class NaturesCreateOrConnectWithoutDecreasedStatInput {
  @TypeGraphQL.Field(_type => NaturesWhereUniqueInput, {
    nullable: false
  })
  where!: NaturesWhereUniqueInput;

  @TypeGraphQL.Field(_type => NaturesCreateWithoutDecreasedStatInput, {
    nullable: false
  })
  create!: NaturesCreateWithoutDecreasedStatInput;
}
