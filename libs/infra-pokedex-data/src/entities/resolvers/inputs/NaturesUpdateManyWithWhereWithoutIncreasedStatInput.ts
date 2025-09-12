import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesScalarWhereInput } from "../inputs/NaturesScalarWhereInput";
import { NaturesUpdateManyMutationInput } from "../inputs/NaturesUpdateManyMutationInput";

@TypeGraphQL.InputType("NaturesUpdateManyWithWhereWithoutIncreasedStatInput", {})
export class NaturesUpdateManyWithWhereWithoutIncreasedStatInput {
  @TypeGraphQL.Field(_type => NaturesScalarWhereInput, {
    nullable: false
  })
  where!: NaturesScalarWhereInput;

  @TypeGraphQL.Field(_type => NaturesUpdateManyMutationInput, {
    nullable: false
  })
  data!: NaturesUpdateManyMutationInput;
}
