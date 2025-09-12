import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesUpdateWithoutDecreasedStatInput } from "../inputs/NaturesUpdateWithoutDecreasedStatInput";
import { NaturesWhereUniqueInput } from "../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.InputType("NaturesUpdateWithWhereUniqueWithoutDecreasedStatInput", {})
export class NaturesUpdateWithWhereUniqueWithoutDecreasedStatInput {
  @TypeGraphQL.Field(_type => NaturesWhereUniqueInput, {
    nullable: false
  })
  where!: NaturesWhereUniqueInput;

  @TypeGraphQL.Field(_type => NaturesUpdateWithoutDecreasedStatInput, {
    nullable: false
  })
  data!: NaturesUpdateWithoutDecreasedStatInput;
}
