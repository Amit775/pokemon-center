import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesUpdateWithoutDecreasedStatTypesInput } from "../inputs/NaturesUpdateWithoutDecreasedStatTypesInput";
import { NaturesWhereUniqueInput } from "../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.InputType("NaturesUpdateWithWhereUniqueWithoutDecreasedStatTypesInput", {})
export class NaturesUpdateWithWhereUniqueWithoutDecreasedStatTypesInput {
  @TypeGraphQL.Field(_type => NaturesWhereUniqueInput, {
    nullable: false
  })
  where!: NaturesWhereUniqueInput;

  @TypeGraphQL.Field(_type => NaturesUpdateWithoutDecreasedStatTypesInput, {
    nullable: false
  })
  data!: NaturesUpdateWithoutDecreasedStatTypesInput;
}
