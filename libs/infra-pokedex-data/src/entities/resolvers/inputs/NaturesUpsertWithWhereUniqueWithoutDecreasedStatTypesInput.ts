import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesCreateWithoutDecreasedStatTypesInput } from "../inputs/NaturesCreateWithoutDecreasedStatTypesInput";
import { NaturesUpdateWithoutDecreasedStatTypesInput } from "../inputs/NaturesUpdateWithoutDecreasedStatTypesInput";
import { NaturesWhereUniqueInput } from "../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.InputType("NaturesUpsertWithWhereUniqueWithoutDecreasedStatTypesInput", {})
export class NaturesUpsertWithWhereUniqueWithoutDecreasedStatTypesInput {
  @TypeGraphQL.Field(_type => NaturesWhereUniqueInput, {
    nullable: false
  })
  where!: NaturesWhereUniqueInput;

  @TypeGraphQL.Field(_type => NaturesUpdateWithoutDecreasedStatTypesInput, {
    nullable: false
  })
  update!: NaturesUpdateWithoutDecreasedStatTypesInput;

  @TypeGraphQL.Field(_type => NaturesCreateWithoutDecreasedStatTypesInput, {
    nullable: false
  })
  create!: NaturesCreateWithoutDecreasedStatTypesInput;
}
