import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesUpdateWithoutIncreasedStatInput } from "../inputs/NaturesUpdateWithoutIncreasedStatInput";
import { NaturesWhereUniqueInput } from "../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.InputType("NaturesUpdateWithWhereUniqueWithoutIncreasedStatInput", {})
export class NaturesUpdateWithWhereUniqueWithoutIncreasedStatInput {
  @TypeGraphQL.Field(_type => NaturesWhereUniqueInput, {
    nullable: false
  })
  where!: NaturesWhereUniqueInput;

  @TypeGraphQL.Field(_type => NaturesUpdateWithoutIncreasedStatInput, {
    nullable: false
  })
  data!: NaturesUpdateWithoutIncreasedStatInput;
}
