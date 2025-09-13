import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesUpdateWithoutIncreasedStatTypesInput } from "../inputs/NaturesUpdateWithoutIncreasedStatTypesInput";
import { NaturesWhereUniqueInput } from "../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.InputType("NaturesUpdateWithWhereUniqueWithoutIncreasedStatTypesInput", {})
export class NaturesUpdateWithWhereUniqueWithoutIncreasedStatTypesInput {
  @TypeGraphQL.Field(_type => NaturesWhereUniqueInput, {
    nullable: false
  })
  where!: NaturesWhereUniqueInput;

  @TypeGraphQL.Field(_type => NaturesUpdateWithoutIncreasedStatTypesInput, {
    nullable: false
  })
  data!: NaturesUpdateWithoutIncreasedStatTypesInput;
}
