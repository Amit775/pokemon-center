import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesCreateWithoutDecreasedStatInput } from "../inputs/NaturesCreateWithoutDecreasedStatInput";
import { NaturesUpdateWithoutDecreasedStatInput } from "../inputs/NaturesUpdateWithoutDecreasedStatInput";
import { NaturesWhereUniqueInput } from "../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.InputType("NaturesUpsertWithWhereUniqueWithoutDecreasedStatInput", {})
export class NaturesUpsertWithWhereUniqueWithoutDecreasedStatInput {
  @TypeGraphQL.Field(_type => NaturesWhereUniqueInput, {
    nullable: false
  })
  where!: NaturesWhereUniqueInput;

  @TypeGraphQL.Field(_type => NaturesUpdateWithoutDecreasedStatInput, {
    nullable: false
  })
  update!: NaturesUpdateWithoutDecreasedStatInput;

  @TypeGraphQL.Field(_type => NaturesCreateWithoutDecreasedStatInput, {
    nullable: false
  })
  create!: NaturesCreateWithoutDecreasedStatInput;
}
