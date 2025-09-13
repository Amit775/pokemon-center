import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesCreateWithoutIncreasedStatInput } from "../inputs/NaturesCreateWithoutIncreasedStatInput";
import { NaturesUpdateWithoutIncreasedStatInput } from "../inputs/NaturesUpdateWithoutIncreasedStatInput";
import { NaturesWhereUniqueInput } from "../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.InputType("NaturesUpsertWithWhereUniqueWithoutIncreasedStatInput", {})
export class NaturesUpsertWithWhereUniqueWithoutIncreasedStatInput {
  @TypeGraphQL.Field(_type => NaturesWhereUniqueInput, {
    nullable: false
  })
  where!: NaturesWhereUniqueInput;

  @TypeGraphQL.Field(_type => NaturesUpdateWithoutIncreasedStatInput, {
    nullable: false
  })
  update!: NaturesUpdateWithoutIncreasedStatInput;

  @TypeGraphQL.Field(_type => NaturesCreateWithoutIncreasedStatInput, {
    nullable: false
  })
  create!: NaturesCreateWithoutIncreasedStatInput;
}
