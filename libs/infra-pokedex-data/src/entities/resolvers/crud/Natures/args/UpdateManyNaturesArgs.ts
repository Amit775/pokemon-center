import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NaturesUpdateManyMutationInput } from "../../../inputs/NaturesUpdateManyMutationInput";
import { NaturesWhereInput } from "../../../inputs/NaturesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNaturesArgs {
  @TypeGraphQL.Field(_type => NaturesUpdateManyMutationInput, {
    nullable: false
  })
  data!: NaturesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => NaturesWhereInput, {
    nullable: true
  })
  where?: NaturesWhereInput | undefined;
}
